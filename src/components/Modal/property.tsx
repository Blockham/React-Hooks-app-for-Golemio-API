import './modal.css'

const Property = (props:PropertyProps) => {
    let availability: boolean = props.value.includes('ANO');
    return (
        <div className={`property ${availability ? "green" : "red"}`}>
            {props.description}
        </div>)
}
export default Property;

interface PropertyProps {
    value: string,
    description: string
}
