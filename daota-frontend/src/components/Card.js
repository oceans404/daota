function Card(cardInfo) {
  const { id, imgUrl, imgAlt, title, description, tags } = cardInfo;
  return (
    <div
      className='rounded overflow-hidden shadow-lg bg-white text-black'
      key={id}
    >
      <img className='w-full' src={imgUrl} alt={imgAlt} />
      <div className='px-6 py-4'>
        <div className='font-bold mobile:text-xl text-l mb-2'>{title}</div>
        <p className='text-gray-700 text-base simple-font'>{description}</p>
      </div>
      <div className='px-6 pt-4 pb-2 simple-font'>
        {tags &&
          tags.map((tag) => (
            <span
              className='inline-block bg-[#5c4684] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2'
              key={`${tag}-${id}`}
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
}

export default Card;
