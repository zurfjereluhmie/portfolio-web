---
image: "portfolio/etter/cover.png"
title: "etter"
description: "Teaching machines to understand 'where': bridging natural language and geographic search using LLMs"
date: 2026-05-06
gallery-slug: "etter"
tags: "AI / LLMs, NLP, Geospatial, Python"
---

# {{ $doc.title }}

::AppMdLinks{:links='["https://pypi.org/project/etter/", "https://github.com/geoblocks/etter", "https://geoblocks.github.io/etter/", "https://spatialists.ch/posts/2026/05/06-etter-natural-language-location/"]'}
::

## TL;DR

**What it is:** An open-source Python package that uses LangChain and LLMs to translate messy, natural language geographic queries into structured, type-safe filters.

**The Problem:** Standard geocoders only understand exact addresses, completely failing at spatial relationships like "near", "inside", or "south of".

**The Solution:** A provider-agnostic tool that extracts these complex spatial relationships and outputs strictly typed Pydantic models ready for downstream spatial databases like PostGIS.

---

> **Note:** This project was featured in **[Spatialists - geospatial news](https://spatialists.ch/posts/2026/05/06-etter-natural-language-location/)**, highlighting its role in the evolution of natural language interfaces for GIS.

---

## Teaching machines to understand "Where"

Search engines have always been incredibly good at finding _what_ we are looking for, but they consistently struggle with _where_.

When a user types a query like _"hiking trails within 5km of a train station north of Lausanne,"_ traditional text search breaks down. The system needs to separate the activity ("hiking trails") from complex, multi-layered geographic filters. Standard geocoders fail here because they are designed to return coordinates for an exact place name, they don't understand relational concepts or human geography.

To solve this, [Frédéric Junod](https://www.linkedin.com/in/fredericjunod/) and I built **etter**: a Python package that transforms natural language location queries into structured, actionable geographic filters. Powered by Large Language Models (LLMs), `etter` extracts spatial relationships, distances, and reference locations, acting as a highly specialized translation layer between human thought and spatial databases.

::AppGallery{baseUrl="/img/portfolio/etter" :imagesUrl='["etter-1.png", "etter-2.png"]'}
::

## The Swiss origin: What is an "etter"?

The inspiration for this project was born on the shores of Lake Geneva, dealing with local geographic datasets. We named the package **etter** (pronounced /ˈɛtɐ/). In Swiss German, an _etter_ is the boundary or enclosure marking the edge of a village or commune, a natural demarcation between settled and unsettled land.

We felt this was the perfect metaphor for what the package does: it draws a clear programmatic boundary around the geographic intent of a user's prompt. To prove the concept, we built our initial demo API server combining `etter`'s query parsing with local geographic resolution using [SwissNames3D](https://www.swisstopo.admin.ch/en/landscape-model-swissnames3d) data.

## The architecture

We developed `etter` with a strict, UNIX-like philosophy: do one thing and do it perfectly. `etter`'s sole responsibility is extracting the geographic filter.

If a user searches for _"vegetarian restaurants with children's menus around 2 miles from Lake Geneva"_, the architecture handles it by letting the **Parent App** identify the features (_"restaurants"_, _"vegetarian"_, _"with children"_), while **etter** explicitly ignores the attributes and focuses entirely on the geography.

### How it works: The three-layer pipeline

To keep the system modular and predictable, we designed `etter` around a three-step architecture:

**Layer 1 | Parsing.** Everything begins with the `GeoFilterParser`. This layer tasks the LLM with interpreting the natural language prompt and extracting the core geographic constraints: the reference location (e.g., "Lac Léman" or "Rhône"), the spatial relationship (e.g., "north_of" or "right_bank"), and any distance values. To prevent unpredictable AI outputs from breaking the application, the LLM is forced to return a strictly typed Pydantic `GeoQuery` model. This perfectly isolates the semantic heavy lifting from the rest of the codebase.

**Layer 2 | Resolution.** Next, the `GeoDataSource` translates the text-based reference location into actual geometry. Out of the box, we provide adapters for PostGIS, [SwissNames3D](https://www.swisstopo.admin.ch/en/landscape-model-swissnames3d) (Swiss toponymy), and [IGN BD-CARTO](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-CARTO?redirected_from=geoservices.ign.fr) (French geography). However, we built this layer to be completely backend-agnostic. Because it relies on a simple Python interface, developers can easily bind it to their own REST APIs, custom spatial databases, or even static GeoJSON files.

**Layer 3 | Spatial operations.** Finally, the `apply_spatial_relation()` function physically shapes the geometry to match the user's intent. This is where the spatial math happens. "North of Lausanne" is computed as a geometric sector pointing north. "On the shores of Lake Geneva" calculates a ring buffer around the lake's perimeter while precisely subtracting the water area itself. It can even handle complex directional logic, like computing the flow direction of a river to correctly draw a buffer exclusively on the "right bank."

### Key features under the hood

- **Structured output:** Transforming messy natural language into strictly typed Pydantic models ensures complete type safety for downstream database operations. We implemented strict confidence thresholds (`confidence_threshold`) to reject ambiguous queries.
- **LLM agnostic:** Built on LangChain, `etter` is provider-agnostic by design. You can plug in OpenAI, Anthropic, or locally hosted open-source models depending on your infrastructure and privacy needs.
- **Real-time streaming:** Waiting for an LLM breaks user immersion. We built-in streaming support (`parse_stream`) that yields real-time reasoning events. In a web UI, this provides feedback where the user sees the model "thinking" and drawing GeoJSON.
- **Multilingual parsing:** Because it leverages LLMs, the package natively understands English, French, German, Italian, and more without maintaining separate parsing logic.

## Global scope and application

While `etter` started with Swiss data on the shores of Lake Geneva, its architecture is inherently global. Because LLMs have ingested vast amounts of global data, the package fundamentally understands the geography of the entire world.

Whether an application needs to parse _"beaches near Sydney"_ or _"parcs au sud de Paris"_, `etter` provides a standardized, scalable way for modern search engines, real estate platforms, and routing applications anywhere in the world to seamlessly interpret human geography.

## Tech stack

- [LangChain](https://docs.langchain.com/oss/python/langchain/overview) for LLM integration (OpenAI, Anthropic, Local).
- [Shapely](https://shapely.readthedocs.io/en/stable/) for geometric operations and spatial reasoning.
- [Pydantic](https://pydantic.dev/docs/) for structured output with full type safety throughout the pipeline.

### What it looks like in code

installation:

```
pip install etter
# or with PostGIS support:
pip install etter[postgis]
```

usage:

```python
from langchain.chat_models import init_chat_model
from etter import GeoFilterParser

llm = init_chat_model(model="gpt-4o", temperature=0, api_key="...")
parser = GeoFilterParser(llm=llm)

result = parser.parse("on the shores of Lake Geneva")
# result.spatial_relation → "on_shores_of"
# result.reference_location → "Lake Geneva"
# result.confidence → 0.97
```

Layer 2 and 3 resolve the location and produce the final geometry. The demo API ships with [SwissNames3D](https://www.swisstopo.admin.ch/en/landscape-model-swissnames3d) and [IGN BD-CARTO](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-CARTO?redirected_from=geoservices.ign.fr) to show the complete end-to-end flow.

::AppGallery{baseUrl="/img/portfolio/etter" :imagesUrl='["etter-3.png"]'}
::
