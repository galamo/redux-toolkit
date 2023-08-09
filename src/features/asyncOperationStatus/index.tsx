import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { increment, fetchCountriesAsync } from "../counter/counterSlice"

export default function AsyncOperationStatus() {
    const dispatch = useAppDispatch()
    const value = useAppSelector((state => state.counter.status))
    return <div style={{ background: "green", width: "100%" }}>
        {value || ""}
        <button onClick={() => {
            dispatch(increment())
        }}> incrementFromHere!!!!</button>
        <button onClick={() => {
            dispatch(fetchCountriesAsync())
        }}> get countries!!!!</button>
    </div>
}