interface Props { params: { attemptId: string } }
export default function StudentResult({ params }: Props) { return <h1>Student / Result {params.attemptId}</h1>; }
