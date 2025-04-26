function app(){
    return(
        <>
        <button>A</button>
        <BUtton>B</BUtton>
        <BUtton>C</BUtton>
        <Routes>
            
        <Routes path='/' element={<h1>default page</h1>}/>
        <Routes path='a' element={<h1>A page</h1>}/>
        <Routes path='b' element={<h1>B page</h1>}/>
        <Routes path='c' element={<h1>C page</h1>}/>
        
        </Routes>

        </>
    );
}
export default App;