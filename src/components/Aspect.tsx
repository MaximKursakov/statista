import {data} from "../data/mockdata"

interface Props {
    currentProduct: string,
    data: []
}


export const Aspect:React.FC<Props> = ({currentProduct}) => {
    console.log(data)
    function refactorData(data : number) {
        return (data * 100).toFixed()
    }
    return(
        <>
        {data.map((item : any) => {
            return(
                <div className="aspect__item" style={{
                    backgroundColor : (item[currentProduct] <= .6) ? "red" : "green" 
                }}>
                <h2>{item.aspect}</h2>
                <p>Score out of 100</p>
                <div className="aspect__score">
                    <h3>{refactorData(item[currentProduct])}%</h3>
                    {Math.random() >= 0.5 ?
                    <p>{"->"}</p> :
                    <p>{"<-"}</p>}
                    
                </div>
                <div></div>
                </div>
            )
        })}
        
        </>
    )
}
