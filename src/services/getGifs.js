export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=T2q1AArE2w2nqxYjytqqyTIT2bp9LfAp&q=${ category }&limit=10`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })

  return gifs 
}