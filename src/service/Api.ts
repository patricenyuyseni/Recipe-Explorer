const BASE = "https://www.themealdb.com/api/json/v1/1";

export const searchMeals = async (query: any) => {
  const res = await fetch(`${BASE}/search.php?s=${query}`);
  const data = await res.json();
  return data.meals || [];
};

export const getCategories = async () => {
  const res = await fetch(`${BASE}/categories.php`);
  const data = await res.json();
  return data.categories;
};

export const filterByCategory = async (cat: any) => {
  const res = await fetch(`${BASE}/filter.php?c=${cat}`);
  const data = await res.json();
  return data.meals || [];
};

export const getMealById = async (id: any) => {
  const res = await fetch(`${BASE}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals[0];
};