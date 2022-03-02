import React, { Component } from 'react';
import PDF from './PDF';
import Test from './Test'
import Folder from './Folder'
import explorer from '../data/folderData';
import Frame1 from '../asset/Frame1.png'
import Frame2 from '../asset/Frame2.png'
import Happy1 from '../asset/happy_birthday.png'
import Happy2 from '../asset/happy_2.png'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            image: '',
            postSubmitted: false,
            Frame: '',
            textColor:'black',
            baloon:''
            
        }
    this.frameSet = this.frameSet.bind(this);
    this.baloonColorSet = this.baloonColorSet.bind(this);
    this.textColorSet = this.textColorSet.bind(this);
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }
    
    submitPost = (e) => {
        // if(!this.state.title || !this.state.content){
        if(!this.state.content){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }
    frameSet(frame) {
        let selectFrame = frame.target.value
        this.setState({
            Frame: selectFrame
        })
    }
    baloonColorSet(baloon_type) {
        let selectedBaloon = baloon_type.target.value
        this.setState({
            baloon: selectedBaloon
        })
    }
    textColorSet(textcolor) {
        const selectedTextColor = textcolor.target.value;
        this.setState({
            textColor: selectedTextColor
        })
    }

    render(){
        return(
            <>
            <div className="container">
                <div className="image">
                    <span>Select Frame &nbsp;</span>
                    <select name="imageList" id=""  onChange={this.frameSet}>
                        <option value={Frame1}>Frame1</option>
                        <option value={Frame2}>Frame2</option>
                    </select>
                </div>
                <div className="baloons">
                    <span>Select baloons &nbsp;</span>
                    <select name="Baloons" id="" onChange={this.baloonColorSet}>
                        <option value={Happy1} >Red</option>
                        <option value={Happy2} >Yellow</option>
                    </select>
                </div>
                <div className="color">
                    <span>Select Text color &nbsp;</span>
                    <select name="Baloons" id="" onChange={this.textColorSet}>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                    </select>
                </div>
                <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                    <textarea onChange={this.onChange('content')} className="form-control" name="content" placeholder="Enter your text here" rows="7"></textarea>
                </div>
                {/* <div className="form-group">
                    <button type="button" onClick={this.submitPost} className="btn btn-primary btn-lg">Submit</button>
                </div> */}
            </div>
            <PDF title={this.state.title} text={this.state.textColor} frame={this.state.Frame} baloon={this.state.baloon} content={this.state.content} image={this.state.image} />
            </>
        );
    }
}

export default Post;