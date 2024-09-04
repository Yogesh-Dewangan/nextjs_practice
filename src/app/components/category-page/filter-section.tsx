function FilterSection() {
  const fiterList = [
    {
      type: "Sort",
      data: [
        "Latest",
        "Price: Low to high",
        "Price: High to low",
        "Rating: Low to high",
        "Rating: High to low",
      ],
    },
    {
      type: "Category",
      data: ["Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"],
    },
    {
      type: "Price",
      data: [
        "<300",
        "301 - 500",
        "501 - 750",
        "751 - 1000",
        "1001 - 1500",
        ">1500",
      ],
    },
  ];

  const showHideData = function (event: any) {
    console.log(event);
  };

  return (
    <section>
      <h2 className="text-lg font-semibold mb-2 pl-4">Filters</h2>
      {fiterList.map((list) => (
        <div className="my-2">
          <h4
            className="bg-blue-100 py-2 text-base pl-4"
            onClick={showHideData}
          >
            {list.type}
          </h4>
          {list.data.map((item) => (
            <p className="text-sm py-1 pl-4">{item}</p>
          ))}
        </div>
      ))}
    </section>
  );
}

export default FilterSection;
