import { showLoading } from './toggleLoading.js';

export default async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
