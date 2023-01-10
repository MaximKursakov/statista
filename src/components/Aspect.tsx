import {data} from "../data/mockdata"
import {BsArrowDownRight, BsArrowUpRight} from "react-icons/bs"
import {motion} from "framer-motion"

interface Props {
    currentProduct: string,
    data: []
}


export const Aspect:React.FC<Props> = ({currentProduct}) => {
    console.log(data)
    function refactorData(data : number) {
        data = data || 0
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
                        <div className="score-displayed">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path  animate={{pathLength: item[currentProduct]}} transition={{duration: 1}} d="M69.5 36C69.5 54.5015 54.5015 69.5 36 69.5C17.4985 69.5 2.5 54.5015 2.5 36C2.5 17.4985 17.4985 2.5 36 2.5C54.5015 2.5 69.5 17.4985 69.5 36Z" stroke="#48484c" stroke-width="5"/>
                        </svg>
                        <p className="aspect__score">{refactorData(item[currentProduct])}%</p >
                        </div>
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
