import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";

const Home = () => {
    return (<div>
        <Header 
            title={"2024년 11월"}
            leftChild={<Button text={"<"} />}
            rightChild={<Button text={">"} />}    
        />
        <DiaryList />
    </div>
    );
}

export default Home;