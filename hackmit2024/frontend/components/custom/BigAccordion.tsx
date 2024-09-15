import { AggregateAccordionData } from "@/app/models/bigAccordion";
import { AccordionNode } from "./accordiannode";

interface IBigAccordionProps {
    data: AggregateAccordionData
}

export default function BigAccordion(props: IBigAccordionProps) {
    const individualData = props.data.AggregateAccordionData
    return (
        <AccordionNode title={individualData[0].title} position={individualData[0].position} setPosition={individualData[0].setPosition}>
            <AccordionNode title={individualData[1].title} position={individualData[1].position} setPosition={individualData[1].setPosition}>
                <AccordionNode title={individualData[2].title} position={individualData[2].position} setPosition={individualData[2].setPosition}></AccordionNode>
                <AccordionNode title={individualData[3].title} position={individualData[3].position} setPosition={individualData[3].setPosition}></AccordionNode>
                <AccordionNode title={individualData[4].title} position={individualData[4].position} setPosition={individualData[4].setPosition}></AccordionNode>
                <AccordionNode title={individualData[5].title} position={individualData[5].position} setPosition={individualData[5].setPosition}></AccordionNode>
            </AccordionNode>
            <AccordionNode title={individualData[6].title} position={individualData[6].position} setPosition={individualData[6].setPosition}>
                <AccordionNode title={individualData[7].title} position={individualData[7].position} setPosition={individualData[7].setPosition}></AccordionNode>
                <AccordionNode title={individualData[8].title} position={individualData[8].position} setPosition={individualData[8].setPosition}></AccordionNode>
                <AccordionNode title={individualData[9].title} position={individualData[9].position} setPosition={individualData[9].setPosition}></AccordionNode>
                <AccordionNode title={individualData[10].title} position={individualData[10].position} setPosition={individualData[10].setPosition}></AccordionNode>
            </AccordionNode>
            <AccordionNode title={individualData[11].title} position={individualData[11].position} setPosition={individualData[11].setPosition}>
                <AccordionNode title={individualData[12].title} position={individualData[12].position} setPosition={individualData[12].setPosition}></AccordionNode>
                <AccordionNode title={individualData[13].title} position={individualData[13].position} setPosition={individualData[13].setPosition}></AccordionNode>
                <AccordionNode title={individualData[14].title} position={individualData[14].position} setPosition={individualData[14].setPosition}></AccordionNode>
                <AccordionNode title={individualData[15].title} position={individualData[15].position} setPosition={individualData[15].setPosition}></AccordionNode>
            </AccordionNode>
            <AccordionNode title={individualData[16].title} position={individualData[16].position} setPosition={individualData[16].setPosition}>
                <AccordionNode title={individualData[17].title} position={individualData[17].position} setPosition={individualData[17].setPosition}></AccordionNode>
                <AccordionNode title={individualData[18].title} position={individualData[18].position} setPosition={individualData[18].setPosition}></AccordionNode>
                <AccordionNode title={individualData[19].title} position={individualData[19].position} setPosition={individualData[19].setPosition}></AccordionNode>
                <AccordionNode title={individualData[20].title} position={individualData[20].position} setPosition={individualData[20].setPosition}></AccordionNode>
            </AccordionNode>
        </AccordionNode>
    )
}
