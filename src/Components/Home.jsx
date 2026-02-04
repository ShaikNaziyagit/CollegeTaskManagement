import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryContext from './CategoryContext';
import "../Styles/Home.css";
import bgImg from "../assets/FormImage.jpeg";

const Home = () => {

    const navigate = useNavigate();
    const { categories } = useContext(CategoryContext);

    const [categories1, setCategories1] = useState(categories);
    const [activeIndex, setActiveIndex] = useState(null);
    const [taskText, setTaskText] = useState("");

    function addTask(index) {
        if (!taskText.trim()) return;

        const updated = [...categories1];
        updated[index].tasks.push({
            text: taskText,
            done: false
        });

        setCategories1(updated);
        setTaskText("");
        setActiveIndex(null);
    }

    function toggleTask(catIndex, taskIndex) {
        const updated = [...categories1];
        updated[catIndex].tasks[taskIndex].done =
            !updated[catIndex].tasks[taskIndex].done;

        setCategories1(updated);
    }

    function closeTaskBox() {
        setActiveIndex(null);
        setTaskText("");
    }

    return (
        <div
            className="home-container"
            style={{
                backgroundImage: `url(${bgImg})`
            }}
        >

            <h2 className="home-title">Welcome User!!</h2>
            <h2 className="home-title">LET'S ORGANISE YOUR TASKS</h2>

            {/* Empty State */}
            {categories1.length === 0 ? (

                <div className="empty-state">
                    <p>No categories available</p>

                    <button
                        className="add-btn"
                        onClick={() => navigate("/create")}
                    >
                        Create Category
                    </button>
                </div>

            ) : (

                /* Categories Grid */
                <div className="categories-wrapper">

                    {categories1.map((cat, index) => (

                        <div key={index} className="category-card">

                            <h4 className="category-title">
                                {cat.catname}
                            </h4>

                            <p>{cat.catdesc}</p>

                            <small>
                                Priority: {cat.catpriority}
                            </small>

                            <br />

                            {/* Tasks */}
                            {cat.tasks.length > 0 && (

                                <ul className="task-list">

                                    {cat.tasks.map((task, i) => (

                                        <li
                                            key={i}
                                            className={
                                                task.done
                                                    ? "task-done"
                                                    : ""
                                            }
                                        >

                                            {task.text}

                                            <button
                                                className="complete-btn"
                                                onClick={() =>
                                                    toggleTask(index, i)
                                                }
                                            >
                                                {task.done
                                                    ? "Undo"
                                                    : "Complete"}
                                            </button>

                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Add Task */}
                            <button
                                className="add-btn"
                                onClick={() => setActiveIndex(index)}
                            >
                                Add Task
                            </button>

                            {/* Task Box */}
                            {activeIndex === index && (

                                <div className="task-box">

                                    <textarea
                                        rows="3"
                                        value={taskText}
                                        onChange={(e) =>
                                            setTaskText(e.target.value)
                                        }
                                    />

                                    <div className="task-action-row">

                                        <button
                                            className="complete-btn"
                                            onClick={() => addTask(index)}
                                        >
                                            Add
                                        </button>

                                        <button
                                            className="complete-btn"
                                            onClick={closeTaskBox}
                                        >
                                            Cancel
                                        </button>

                                    </div>

                                </div>
                            )}

                        </div>
                    ))}

                </div>
            )}

            {/* Create Button */}
            {categories1.length > 0 && (

                <div className="center-btn">

                    <button
                        className="add-btn"
                        onClick={() => navigate("/create")}
                    >
                        Create New Category
                    </button>

                </div>
            )}

        </div>
    );
};

export default Home;
