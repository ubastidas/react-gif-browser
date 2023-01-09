
export const getGift = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=mvmqEMrsCYRW5DS0ZWlqIoqq67AERu7q&q=${ category }&limit=5`;

    const result = await fetch( url );

    const resultJson = await result.json();

    const { data } = resultJson;

    const gifs = data.map( (img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}
