export default function Home() {
  //生成一百个li填充
  const list = []
  for (let i = 0; i < 100; i++) {
    list.push(<li key={i}>{i}</li>)
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">首页</h1>
      <ul>
        {list}
      </ul>
    </div>
  );
}
