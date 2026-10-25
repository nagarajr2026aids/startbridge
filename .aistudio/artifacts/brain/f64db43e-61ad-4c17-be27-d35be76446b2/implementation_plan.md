# StartBridge — Simple English & Indian Rupee (₹) Modernization Plan

This plan details the step-by-step improvements to StartBridge without rebuilding from scratch: converting all dollar amounts into standard Indian Rupees (₹), rewriting all text in plain, easy-to-understand English, replacing the hero box with Smart AI Matching content, adding the requested navigation links, and refining the modern navy blue and teal aesthetic.

> [!IMPORTANT]
> **Confirmed User Choices**:
> - **Currency Display**: Standard Indian Rupee format with ₹ symbol and Indian numbering (e.g., `₹45,000`, `₹2,50,000`, `₹35,00,000`).
> - **Hero Box Content**: Replaced "Student Engineering Spotlight" with "Smart AI Matching" explaining how AI connects startup founders with suitable investors in simple words.
> - **Tone & Vocabulary**: Clear, simple, everyday English. Complex technical jargon (such as "ventricular ectopic beats", "sub-gigahertz spectrometry", "haptic counter-oscillation") is replaced with straightforward words like "Heart health sensor", "Clean river test monitor", and "Hand steadying glove".

---

## 1. Overview & Core Concept

- **What It Does**: StartBridge is an easy-to-use website that connects student startup founders who build real technology projects with investors who want to support them.
- **Target Audience**: College students, beginner programmers, and early-stage startup investors.
- **Key Improvements**:
  1. Indian Rupee (₹) currency across all projects, budgets, filters, forms, and investor profiles.
  2. Simple, beginner-friendly English everywhere on the website.
  3. Clean 6-item navigation bar: **Home**, **Explore Projects**, **Submit Project**, **Investors**, **Ratings & Reviews**, and **AI Assistant**.
  4. Updated modern hero card highlighting **Smart AI Matching**.
  5. Enhanced search and filter bar for all 5 sectors (Healthcare, Education, Agriculture, Environment, Technology).

---

## 2. User Experience & Visual Design

### Navigation Menu Update
The top bar will contain the exact navigation items requested:
- **Home**: Scrolls to top / hero section.
- **Explore Projects**: Jumps to the search and project card catalog.
- **Submit Project**: Opens the step-by-step project submission form.
- **Investors**: Jumps to the active angel investor directory.
- **Ratings & Reviews**: Jumps to the community feedback section.
- **AI Assistant**: Opens the conversational Gemini AI advisor drawer.
- Plus the role toggle button (**Developer** / **Investor**) and **Messages Inbox**.

### Hero Showcase Update
- Remove: "Student Engineering Spotlight" and "Class of 2026 Batch" box.
- Add: **Smart AI Matching** showcase box with simple English explanation:
  - Header: *Smart AI Startup Matching*
  - Body: *StartBridge uses artificial intelligence to read your project details and instantly connect you with investors who fund your category.*
  - 3 quick benefit points: Fast founder matching, clear budget checks in ₹, and real demo video reviews.

### Currency Conversion Matrix
All sample project values and investor brackets will be converted to realistic Indian Rupee (₹) amounts:
- **CardioMesh (Heart Monitor)**: Dev Cost: `₹35,000` · Target Funding: `₹4,00,000`
- **CeresEdge (Farm Soil Sensor)**: Dev Cost: `₹22,000` · Target Funding: `₹3,00,000`
- **AquaFilter (Water Test Buoy)**: Dev Cost: `₹48,000` · Target Funding: `₹5,50,000`
- **CodeSculpt (Braille Learning Kit)**: Dev Cost: `₹18,000` · Target Funding: `₹2,50,000`
- **AeroRescue (Rescue Drone Camera)**: Dev Cost: `₹42,000` · Target Funding: `₹7,00,000`
- **NeuroVibe (Hand Steadying Glove)**: Dev Cost: `₹28,000` · Target Funding: `₹4,50,000`
- **Investor Check Sizes**: `₹1,00,000` to `₹25,00,000+`
- **Hero Proof Strip**: `₹25,00,000+` Inquiries logged

---

## 3. Technical Architecture & Modifications

```
┌────────────────────────────────────────────────────────────────────────┐
│                        StartBridge Web App                             │
├────────────────────────────────────────────────────────────────────────┤
│  Top Navigation (Home · Explore · Submit · Investors · Reviews · AI)   │
├───────────────────────────────────┬────────────────────────────────────┤
│           Main Views              │          Interactive Modals        │
│  ┌─────────────────────────────┐  │  ┌──────────────────────────────┐  │
│  │ Hero with Smart AI Match Box│  │  │ Project Details & Reviews    │  │
│  │ Sector Filters (5 sectors)  │  │  ├──────────────────────────────┤  │
│  │ Project Cards (₹ Currency)  │  │  │ Submit Project Form (in ₹)   │  │
│  │ Matchmaker Console (in ₹)   │  │  ├──────────────────────────────┤  │
│  │ Investor Profiles (in ₹)    │  │  │ Direct Contact Modal (in ₹)  │  │
│  │ Ratings & Community Reviews │  │  ├──────────────────────────────┤  │
│  └─────────────────────────────┘  │  │ AI Assistant & Message Inbox │  │
│                                   │  └──────────────────────────────┘  │
├───────────────────────────────────┴────────────────────────────────────┤
│                  Simple English Data Store (mockData.ts)               │
└────────────────────────────────────────────────────────────────────────┘
```

### Files to Update (Preserving all working features):
1. `src/data/mockData.ts`: Convert all costs/funding to Indian Rupees (`₹`), rewrite all titles, descriptions, and benefits in clear simple English.
2. `src/components/HeroSection.tsx`: Replace the spotlight box with the "Smart AI Matching" card; update text to simple English; update currency to ₹.
3. `src/components/Navbar.tsx`: Update navigation links to include Home, Explore Projects, Submit Project, Investors, Ratings & Reviews, AI Assistant.
4. `src/components/ProjectCard.tsx`: Display development cost in `₹` format with simple English labels.
5. `src/components/ProjectDetailModal.tsx`: Display all financials and BOM in `₹` format with simple English text.
6. `src/components/SubmitProjectModal.tsx`: Update inputs to Indian Rupees (`₹`), with simple English guidance.
7. `src/components/ContactModal.tsx`: Update check size brackets to Indian Rupees (`₹50,000` to `₹10,00,000+`).
8. `src/components/InvestorDirectory.tsx`: Show check sizes in Indian Rupees (`₹1,00,000` to `₹25,00,000`).
9. `src/components/MatchingSection.tsx`: Update slider and matching logic to `₹25,000` to `₹15,00,000`.
10. `src/App.tsx`: Add the dedicated Ratings & Reviews section anchor, connect the new navigation menu items, and ensure seamless scrolling.

---

## 4. Verification Plan

- Run `compile_applet` to ensure 100% clean TypeScript build with zero errors.
- Run `lint_applet` to confirm no lint issues.
- Verify currency symbol `₹` appears across all pages, cards, sliders, and forms.
- Verify navigation bar links (Home, Explore Projects, Submit Project, Investors, Ratings & Reviews, AI Assistant) all work smoothly.
- Verify search bar and all 5 sector filters work accurately with live results.
- Verify responsive layout on mobile, tablet, and desktop viewports.
