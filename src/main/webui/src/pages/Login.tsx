import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log('登录')
    // 跳转到 /about 路由，替换当前历史记录
    navigate('/', { replace: true })
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">登录</h2>
        <input type="text" placeholder="用户名" className="input input-bordered w-full" />
        <input type="password" placeholder="密码" className="input input-bordered w-full mt-2" />
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary" onClick={handleLogin}>
            登录
          </button>
        </div>
      </div>
    </div>
  )
}
