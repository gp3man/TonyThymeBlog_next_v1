const SingleReview = () => {
  return (
    <div className="flex-col pb-2">
      <div className="flex justify-between">
        <div className="grid grid-cols-2">
          <img className="rounded-full" src="/emptyProfile.jpg" height={40} width={40} />
          <div className="flex-col">
            <p>Name</p>
            <p>Rating</p>
          </div>
        </div>
        <div>
          <p>Date</p>
        </div>
      </div>
      <div className="pb-2">
        <p>
          Recommend:
          <span> yes</span>
        </p>
      </div>
      <div className="pb-2">
        <p>Title</p>
        <p className="truncate">
          Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna ex, dignissim sit amet pharetra eget, mollis sit amet felis. Mauris suscipit purus sit amet maximus tempor. Etiam finibus orci elit. Sed ultrices tempor nisi, a scelerisque eros. Integer tincidunt interdum vehicula. Maecenas auctor quam ligula, in aliquam justo malesuada a. Sed sed enim risus. Donec sagittis, erat vitae laoreet lobortis, ligula dui dapibus justo, vitae efficitur sem enim id dolor. Nam ac eros nec purus fringilla sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin nec erat eros. Donec scelerisque interdum lorem vel imperdiet. Aliquam sit amet porttitor velit, nec suscipit erat. Etiam finibus at erat feugiat vestibulum.
        </p>
      </div>
      <div className="flex pb-2 end-0">
        <div className="end-0">
          Was this Review helpful? <span>Toggle</span>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
