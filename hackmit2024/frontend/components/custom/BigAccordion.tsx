import { AggregateAccordionData } from "@/app/models/bigAccordion";
import { AccordionNode } from "./accordiannode";

interface IBigAccordionProps {
    data: AggregateAccordionData
}

export default function BigAccordion(props: IBigAccordionProps) {
    const individualData = props.data.AggregateAccordionData
    return (
        <AccordionNode title={individualData[0].title} position={individualData[0].position}>
            <AccordionNode title={individualData[1].title} position={individualData[1].position}>
                <AccordionNode title={individualData[2].title} position={individualData[2].position}></AccordionNode>
                <AccordionNode title={individualData[3].title} position={individualData[3].position}></AccordionNode>
                <AccordionNode title={individualData[4].title} position={individualData[4].position}></AccordionNode>
                <AccordionNode title={individualData[5].title} position={individualData[5].position}></AccordionNode>
            </AccordionNode>
            <AccordionNode title={individualData[6].title} position={individualData[6].position}>
                <AccordionNode title={individualData[7].title} position={individualData[7].position}></AccordionNode>
                <AccordionNode title={individualData[8].title} position={individualData[8].position}></AccordionNode>
                <AccordionNode title={individualData[9].title} position={individualData[9].position}></AccordionNode>
                <AccordionNode title={individualData[10].title} position={individualData[10].position}></AccordionNode>
            </AccordionNode>
            <AccordionNode title={individualData[11].title} position={individualData[11].position}>
                <AccordionNode title={individualData[12].title} position={individualData[12].position}></AccordionNode>
                <AccordionNode title={individualData[13].title} position={individualData[13].position}></AccordionNode>
                <AccordionNode title={individualData[14].title} position={individualData[14].position}></AccordionNode>
                <AccordionNode title={individualData[15].title} position={individualData[15].position}></AccordionNode>
            </AccordionNode>
            <AccordionNode title={individualData[16].title} position={individualData[16].position}>
                <AccordionNode title={individualData[17].title} position={individualData[17].position}></AccordionNode>
                <AccordionNode title={individualData[18].title} position={individualData[18].position}></AccordionNode>
                <AccordionNode title={individualData[19].title} position={individualData[19].position}></AccordionNode>
                <AccordionNode title={individualData[20].title} position={individualData[20].position}></AccordionNode>
            </AccordionNode>
        </AccordionNode>
    )
}
