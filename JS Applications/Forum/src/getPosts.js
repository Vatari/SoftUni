export async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const data = await response.json();
    return await data
  } catch (err) {
    alert(err.message);
  }
}
