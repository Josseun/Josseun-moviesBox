type GenresItem = {
  name: string;
  path: string;
};

type GenresNav = {
  left: GenresItem[];
  right: GenresItem[];
};

export const accLinks: string[] = ["Sign In", "Help", "Watch Anywhere"];

export const navLinks: GenresItem[] = [
  { name: "Home", path: "" },
  { name: "Movies", path: "movies" },
  { name: "TV shows", path: "tv_shows" },
];

export const genresNav: GenresNav = {
  left: [
    { name: "Action and adventure", path: "action_and_adventure" },
    { name: "Comedy", path: "comedy" },
    { name: "Documentary", path: "documentary" },
    { name: "Drama", path: "drama" },
    { name: "Fantasy", path: "fantasy" },
    { name: "Horror", path: "horror" },
    { name: "Kids", path: "kids" },
    { name: "Mystery and thrillers", path: "mystery_and_thrillers" },
  ],

  right: [
    { name: "Romance", path: "romance" },
    { name: "Science fiction", path: "science_fiction" },
  ],
};
