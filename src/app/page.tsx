type Idata={
  tittle:string,
  description:string,
}
const data:Idata[]=[
  {tittle:"Kinza", description:"I am a student"},
  {tittle:"Areeba", description:"I am a Developer"},
  {tittle:"Marukh", description:"I am a Front-end dev"},
  {tittle:"Marukh", description:"I am a Front-end dev"},

]

export default function Home() {
  return (
    <div className="container">

      <div className="parentContainer">
        {data.map((Idata)=>(
              <div className="childContiner">
              <div className="img"></div>
              <div className="tittle">{Idata.tittle}</div>
              <div className="description">{Idata.description}</div>
            </div>
        ))}
      

      </div>

    </div>
  );
}
