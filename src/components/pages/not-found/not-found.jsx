import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const HomeBtn = () => {
        console.log('홈으로 이동')

        navigate('/');
  };

  return (
    <div className="w-screen h-screen bg-black p-10">
        <div className="h-full flex flex-col justify-center items-center text-stone-400 gap-1">
            <div className="text-5xl mb-8 font-bold">404 ERROR</div>
            <div>페이지를 찾을 수 없습니다.</div>
            <div>존재하지 않는 주소를 입력하셨거나,</div>
            <div>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</div>
            <div className="flex gap-2 mt-8">
                <button 
                  className="border border-stone-400 py-2 px-5 rounded-lg hover:bg-stone-400 hover:text-white" 
                  onClick={HomeBtn}
                >
                  홈으로 이동
                </button>
                {/* <button className="border border-stone-400 py-2 px-5 rounded-lg hover:bg-stone-400 hover:text-white">이전</button> */}
            </div>
        </div>
    </div>
  )
}

export default NotFound