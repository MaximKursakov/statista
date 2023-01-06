import { MyResponsiveRadar } from "../Radar";
import { data } from "../../data/mockdata"
import {mockReviews} from "../../data/mockReviews"
import "./AspectScore.scss"
import { MyResponsiveBar } from "../Bar";

export const AspectScore = () => {
    return(
        <div className="aspect-score">
            <div className="aspect-radar">
                <MyResponsiveRadar data={data}/>
            </div>
            <div className="review-bar">
            <MyResponsiveBar data={mockReviews}/>
            </div>
        </div>
    )
}