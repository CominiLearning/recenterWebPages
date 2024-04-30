import { cancellation_policy_text } from "../../texts/cancellationPolicy";
import "./CancellationPolicy.scss";

export default function CancellationPolicy() {
  return <div className="cancellation_policy">{cancellation_policy_text}</div>;
}
