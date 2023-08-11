const style = () => {
    const mainstyle =
    {
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        paddingTop: "90px",
        paddingBottom: "90px",
        backgroundColor: "#e1e3eb"
    }
    const subMain = {
        display: "flex",
        justifyContent: "center",
        height: "550px",
        width: "35%",
        boxShadow: "11px 12px 13px 12px rgb(207, 207, 207)",
        paddingTop: "30px",
        borderRadius: "60px",
        backgroundColor: "white"
    }

    const imgs = {
        paddingTop: "20px",
        justifyContent: "center",
        display: "flex"
    }

    const containerImage = {
        backgroundColor: "rgb(223, 221, 221)",
        borderRadius: "150px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        height: "115px",
        width: "115px"
    }
    const profile = {
        height: "100px",
        width:  "100px",
        borderRadius: "130px"
    }
    
    const input = {
        width: "300px",
        height: "50px",
        borderRadius: "60px",
        boxShadow: "inset 0px 0px 25px 0px #888",
        border: "none",
        outline: "none",
        backgroundColor: "#fff"
    }
    const email = {
        height: "25px",
        width: "25px",
        position: "absolute",
        padding: "14px 0 0 25px"
    }

    const name ={
        paddingLeft: "70px",
        fontSize: "20px"
    }

    const button = {
        width: "380px",
        height: "50px",
        borderRadius: "60px",
        backgroundColor: "#b103fc",
        color: "white",
        fontSize: "25px",
        border: "none"
    }
    const loginButton = {
        paddingTop: "25px"
    }
    const link ={
        fontSize: "25px",
        fontWeight: "400"
    }
    const a = {
        color: "blue"
    }
    const secondInput = {
       
            paddingTop: "20px"

    }

    return {mainstyle,subMain,imgs,containerImage,profile,input,email,name,button,loginButton,link,a,secondInput};
}


export default style
