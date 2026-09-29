import apiClient from "./axiosClient";

const pick = (item, keys) => {
  for (const key of keys) {
    const value = item?.[key];
    if (value !== undefined && value !== null && value !== "") return value;
  }
  return "";
};

const normalize = (item, index) => ({
  id: item?._id ? String(item._id) : item?.id ?? `farm-item-${index}`,
  name: pick(item, ["name", "title", "productName"]),
  category: pick(item, ["category", "categoryName", "type"]),
  shortDescription: pick(item, [
    "shortDescription",
    "shortDesc",
    "description",
    "details",
  ]),
  img: pick(item, ["img", "image", "imageUrl", "photo", "thumbnail"]),
});

export const getFarmItems = async () => {
  const { data } = await apiClient.get("/farmItems");

  const list = Array.isArray(data) ? data : data?.data ?? data?.items ?? [];

  return list.map(normalize);
};
