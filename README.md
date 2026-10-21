# Media Vault (Redux Practice Project)

A simple React app to search for images and GIFs, built to practice **Redux Toolkit**.

## Features

- Search for images or GIFs by keyword
- Shows the first 20 results
- Clicking a result opens the original source page
- Save results to a personal collection
- Collection persists in `localStorage`, so it survives page refresh
- Toast notifications when adding or removing items

## Tech Stack

- React (Vite)
- Redux Toolkit and React-Redux
- React Router
- Axios
- Tailwind CSS
- React-Toastify
- Unsplsh and Giphy API

## What I Practiced

- Setting up a Redux store with `configureStore`
- Writing slices with `createSlice` (`search` and `collection`)
- Using `useSelector` and `useDispatch`
- Keeping reducers pure and persisting state with `store.subscribe`
- Fetching data from APIs with async/await and `useEffect`

## Getting Started

1. Clone the repo

```bash
   git clone https://github.com/Swapnil-Mhatre/media-vault-redux.git
   cd media-vault-redux
```

2. Install dependencies

```bash
   npm install
```

3. Create a `.env` file in the project root and add your API keys

```
   VITE_GIPHY_KEY=your_giphy_key
   VITE_IMAGE_API_KEY=your_image_api_key
```

4. Start the dev server

```bash
   npm run dev
```

## Project Structure

```
src/
  api/         # mediaApi.js
  components/  # ResultCard, ResultGrid, SearchBar, Tabs,
  pages/       # HomePage, Collections
  redux/       # store and features
  utils/       # toast
  # App.jsx
  # index.css
  # main.jsx
```

## Future Improvements

- Convert to TypeScript
- Add pagination or infinite scroll
