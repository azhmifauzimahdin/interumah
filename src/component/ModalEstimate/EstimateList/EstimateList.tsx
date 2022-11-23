import React, { useEffect, useState } from "react"
import "./EstimateList.css"
import { IconCalculator } from "../../Icon"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

interface EstimateListProps<T = any> {
    data: T[]
}

const EstimateList: React.FC<EstimateListProps> = props => {
    const [estimateList, setEstimateList] = useState<any[]>([])

    //------ Initiate Estimate List ------
    const initiateEstimateList = (data: any[]) => {
        setEstimateList(data)
    }

    useEffect(() => {
        if (props.data.length === 0) return
        initiateEstimateList([...props.data])
    }, [props.data])

    //------ onClick box------
    const location = useLocation()
    const navigate = useNavigate()
    const cek = (id: number) => {
        navigate(`${location.pathname}?estimate=${id}`)
    }

    //------- style box active -------
    const [searchParams] = useSearchParams()
    const estimate = searchParams.get("estimate")
    const a = estimate !== null ? parseInt(estimate, 10) : null

    return (
        <>
            {estimateList.length > 0 ? estimateList.map(data => {
                let classNames = ["estimateList-box"];

                if (data.id === a) {
                    classNames.push("active");
                } else {

                }
                return (
                    <section key={data.id} onClick={() => cek(data.id)} className={classNames.join(" ")}>
                        <IconCalculator color="blue" />
                        <span className="estimateList-box-content">{data.data} {data.active}</span>
                    </section>
                )
            }) : null}
        </>
    )
}

export default EstimateList