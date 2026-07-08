# 🎬 MovieBox UI Style Guide

> Design system and UI guidelines for the MovieBox streaming platform.

---

# Brand Identity

MovieBox is a modern movie streaming platform inspired by Netflix, Prime Video, and Disney+, while maintaining its own unique identity.

### Design Goals

- Clean
- Modern
- Premium
- Cinematic
- Responsive
- Accessible

---

# Color Palette

## Primary Colors

| Name | Hex |
|------|------|
| Primary | #3B82F6 |
| Primary Hover | #2563EB |
| Accent | #F59E0B |

---

## Background Colors

| Name | Hex |
|------|------|
| Background | #0B0F19 |
| Surface | #111827 |
| Card | #1F2937 |

---

## Neutral Colors

| Name | Hex |
|------|------|
| Border | #374151 |
| Divider | #4B5563 |

---

## Text Colors

| Name | Hex |
|------|------|
| Primary Text | #F9FAFB |
| Secondary Text | #9CA3AF |
| Muted Text | #6B7280 |

---

## Status Colors

| Name | Hex |
|------|------|
| Success | #10B981 |
| Warning | #F59E0B |
| Error | #EF4444 |

---

# Typography

## Font Stack

### Headings

**Bebas Neue**

Used for:

- Hero Titles
- Section Headers
- Promotional Text
- Logo (optional)

Example

```
NOW STREAMING
```

---

### Movie Titles

**Manrope**

Used for:

- Movie Names
- Card Titles
- Detail Page Titles

Weight

- 600
- 700

---

### Body Font

**Inter Tight**

Used for:

- Paragraphs
- Descriptions
- Navigation
- Buttons
- Forms
- Inputs

Weight

- 400
- 500
- 600

---

# Font Sizes

## Hero

```
text-6xl
```

Desktop

```
60px
```

Mobile

```
40px
```

---

## Section Title

```
text-3xl
```

---

## Movie Title

```
text-lg
```

---

## Body

```
text-base
```

---

## Small Text

```
text-sm
```

---

# Spacing

Use an 8px spacing system.

| Class | Value |
|--------|-------|
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 5 | 20px |
| 6 | 24px |
| 8 | 32px |
| 10 | 40px |
| 12 | 48px |
| 16 | 64px |

---

# Border Radius

Buttons

```
rounded-lg
```

Cards

```
rounded-xl
```

Modals

```
rounded-2xl
```

---

# Shadows

Cards

```
shadow-lg
```

Hover

```
shadow-2xl
```

---

# Buttons

## Primary Button

Background

```
Primary
```

Text

```
White
```

Hover

```
Primary Hover
```

Radius

```
rounded-lg
```

Transition

```
300ms
```

---

## Secondary Button

Background

```
Card
```

Border

```
Border
```

Hover

```
Surface
```

---

# Cards

Movie cards should contain

- Poster
- Movie Title
- Rating
- Release Year

Hover Effects

- Scale 105%
- Smooth transition
- Slight shadow increase

Transition

```
300ms
```

---

# Icons

Recommended

- Lucide React
- Iconify

Size

```
20px
```

Large

```
24px
```

---

# Layout

Max Width

```
1280px
```

Container

```
mx-auto
```

Padding

```
px-4
md:px-8
lg:px-12
```

---

# Grid

Mobile

```
2 columns
```

Tablet

```
3 columns
```

Desktop

```
5 columns
```

Large Desktop

```
6 columns
```

---

# Animations

Duration

```
300ms
```

Hover

- Scale
- Shadow
- Opacity

Avoid

- Long animations
- Excessive motion

---

# Components

## Navbar

Contains

- Logo
- Search
- Navigation
- User Menu

---

## Hero

Contains

- Featured Movie
- Title
- Description
- CTA Buttons

---

## Movie Card

Contains

- Poster
- Rating
- Title
- Release Date

---

## Movie Row

Horizontal scrolling list.

---

## Search Bar

Rounded

Focus

Primary Color

---

## Footer

Contains

- Navigation
- Social Links
- Copyright

---

# Accessibility

Minimum contrast ratio

```
4.5:1
```

Always

- Keyboard accessible
- Focus states visible
- Images have alt text

---

# Responsive Breakpoints

| Screen | Width |
|---------|-------|
| Mobile | <640px |
| Tablet | ≥640px |
| Laptop | ≥1024px |
| Desktop | ≥1280px |

---

# Image Sizes

Movie Poster

```
2:3
```

Backdrop

```
16:9
```

Avatar

```
1:1
```

---

# Naming Convention

Components

```
MovieCard.tsx
```

Hooks

```
useMovies.ts
```

Types

```
movie.ts
```

Services

```
tmdb.ts
```

Pages

```
MovieDetails.tsx
```

---

# Design Principles

- Keep layouts clean.
- Prioritize readability.
- Let movie artwork stand out.
- Use whitespace intentionally.
- Reuse components whenever possible.
- Maintain consistent spacing and typography.
- Optimize for mobile-first development.

---

# Inspiration

- Netflix
- Prime Video
- Disney+
- Apple TV+
- Letterboxd

---

# Project Motto

> "A cinematic experience built for movie lovers."