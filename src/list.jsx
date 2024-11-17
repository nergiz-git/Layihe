export default function List({item, setData, index}) {
  return (
    <>
      <li>
        <p>{item}</p>
        <button className="list-remove"
          onClick={() => { 
            console.log(index)
            setData((prew) => {
              prew.splice(index, 1);
              return [...prew];
            });
          }}
        ></button>
      </li>
    </>
  );
}
