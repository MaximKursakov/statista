import {data} from "../data/mockdata"
import {BsArrowDownRight, BsArrowUpRight} from "react-icons/bs"

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
                    backgroundColor : (item[currentProduct] <= .6) ? "#fbf6f0" : "#f0faef" 
                }}>
                    <h2>{item.aspect}</h2>
                    <p className='description'>Score out of 100</p>
                    <div className="item__score">
                        <h3>{refactorData(item[currentProduct])}%</h3>
                            {Math.random() >= 0.5 ?
                            <p><BsArrowDownRight></BsArrowDownRight></p> :
                            <p><BsArrowUpRight></BsArrowUpRight></p>}
                    </div>
                </div>
            )
        })}
        
        </>
    )
}
