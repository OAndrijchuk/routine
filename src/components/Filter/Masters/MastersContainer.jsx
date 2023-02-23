
import { connect } from "react-redux";
import Masters from "./Masters";


let mapStateToProps = (state) => {
    return{
        masters: state.masters,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        
        }
    }


const MastersContainer = connect(mapStateToProps,mapDispatchToProps)(Masters);

export default MastersContainer;