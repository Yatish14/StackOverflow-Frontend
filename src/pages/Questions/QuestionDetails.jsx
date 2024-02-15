import React, {useState} from 'react';
import { useParams,useNavigate, useLocation } from 'react-router-dom';
import upVote from "../../assets/sort-up.svg"
import downVote from "../../assets/sort-down.svg"
import "./Questions.css";
import { Link } from 'react-router-dom';
import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswer from './DisplayAnswer';
import {postAnswer} from "../../actions/question"
import { useSelector, useDispatch } from 'react-redux';
import './Questions.css';
import moment from "moment";
import copy from "copy-to-clipboard";
import { deleteQuestion, voteQuestion } from '../../actions/question';

const QuestionDetails = () => {
    const location = useLocation();
    const url = 'http://localhost:3000'
    const { id } = useParams();
    var questionsList = useSelector(state => state.questionsReducer)
    console.log(questionsList)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(id)
    const User = useSelector((state) => (state.currentUserReducer))
    const [Answer, setAnswer] = useState('')
    const handlePostAns = (e,answerLength) => {
        e.preventDefault()
        if( User === null )
        {
            alert('Login or Signup to Answer a Question!')
            navigate('/Auth')
        }
        else
        {
            if(Answer === '')
            {
                alert('Enter an answer before submitting')
            }
            else
            {
                dispatch(postAnswer({id, noOfAnswers: answerLength + 1, answerBody: Answer,userAnswered: User.result.name, userId: User.result._id}))
            }
        }
    }
    const handleShare = () => {
        copy(url + location.pathname);
        alert(`Copied url : ${url + location.pathname}`)
    }
    const handleDelete = () => {
        dispatch(deleteQuestion(id,navigate))
    }
    const handleUpVote = () => {
        dispatch(voteQuestion(id,'upVote',User.result._id))
    }
    const handleDownVote = () => {
        dispatch(voteQuestion(id,'downVote',User.result._id))
    }

    return (
      <div className='question-details-page'>
        {
            questionsList === null ?
            <h1>Loading...</h1> :
            <>
              {
                questionsList.data?.filter((question) => question._id === id).map((question) => {
                    return(
                    <div key = {question._id}>
                        <section className='question-details-container'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className="question-votes">
                                    <img src={upVote} alt='upvote' width="18" className='votes-icon' onClick={handleUpVote}/>
                                    <p>{question.upVote.length - question.downVote.length}</p>
                                    <img src={downVote} alt='downvote' width="18" className='votes-icon' onClick={handleDownVote}/>
                                </div>
                                <div style={{width: "100%"}}>
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className="question-details-tags">
                                        {
                                            question.questionTags.map((tag) => (
                                                <p key={tag}>{tag}</p>
                                            ))
                                        }
                                    </div>
                                    <div className="question-actions-user">
                                        <div>
                                            <button type='button' onClick={handleShare}>Share</button>
                                            {
                                                User?.result?._id === question?.userId && (
                                                <button type='button' onClick={handleDelete}>Delete</button>)
                                            }
                                        </div>
                                        <div>
                                            <p>asked {moment(question.askedOn).fromNow()} </p>
                                            <Link to = {`/Users/${question.userId}`} className='user-link' style={{color: 'rgb(0, 157, 255)'}}>
                                                <Avatar backgroundColor="orange" px = "8px" py = "5px">{question.userPosted.charAt(0).toLocaleUpperCase()}</Avatar>
                                                <div>
                                                    {
                                                        question.userPosted
                                                    }
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                            question.noOfAnswers !== 0 && (
                                <section>
                                    <h3>{question.noOfAnswers} Answers</h3>
                                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                                </section>
                            )
                        }
                        <section className='post-ans-container'>
                            <form onSubmit={ (e) => {handlePostAns(e,question.answer.length) }}>
                                <label htmlFor='answer-input'>
                                    <h3>Your Answer</h3>
                                    <textarea id= "answer-input" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br/>
                                </label>
                                <input type="submit" className='post-ans-btn' value='Post Your Answer'></input>
                            </form>
                            <p>Browse other Question tagged 
                                {
                                    question.questionTags.map((tag) => (
                                        <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                    ))
                                } 
                                <Link to='/AskQuestion' style={{textDecoration: "none", color: "rgb(0, 157, 255)"}}>or ask your own question.</Link>
                            </p>
                        </section>
                    </div>
                    )
                })
              }
            </>
        }
      </div>
    )
}

export default QuestionDetails