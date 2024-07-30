import React, { useCallback, useEffect, useState } from 'react'
import './ExerciseDetail.css'
import { useParams } from 'react-router-dom'
import { apiOptions, fetchData, youtubeOptions } from '../../api/fetchData';
import person from '../../images&icons/icons/body-part.png'
import targetImg from '../../images&icons/icons/target.png'
import equipmentImg from '../../images&icons/icons/equipment.png'
import ScrollBar from '../../components/scrollbar/ScrollBar'

const ExerciseDetail = () => {

    const API_ONE = 'https://exercisedb.p.rapidapi.com';
    const API_TWO = 'https://youtube-search-and-download.p.rapidapi.com';
    const { id } = useParams();
    const [idDetails, setIdDetails] = useState({})
    const [videoDetails, setVideoDetails] = useState([])
    const [targetExercise, setTargetExercise] = useState([])
    const [equipmentExercise, setEquipmentExercise] = useState([])


    const fetchExerciseDetail = useCallback(async () => {
        const exerciseDetail = await fetchData(`${API_ONE}/exercises/exercise/${id}`, apiOptions);
        setIdDetails(exerciseDetail);

        const videoDetail = await fetchData(
            `${API_TWO}/search?query=${exerciseDetail.name}`, youtubeOptions)
        setVideoDetails(videoDetail.contents)

        const targetExerciseData = await fetchData(`${API_ONE}/exercises/target/${exerciseDetail.target}`, apiOptions)
        setTargetExercise(targetExerciseData)

        const equipmentExerciseData = await fetchData(`${API_ONE}/exercises/equipment/${exerciseDetail.equipment}`, apiOptions)
        setEquipmentExercise(equipmentExerciseData)
    }, [id])

    const { bodyPart, gifUrl, name, target, equipment, instructions } = idDetails;

    useEffect(() => {
        fetchExerciseDetail();
    }, [fetchExerciseDetail])

    const extras = [
        {
            icon: person,
            name: bodyPart
        },
        {
            icon: targetImg,
            name: target
        },
        {
            icon: equipmentImg,
            name: equipment
        },
    ]
    return (
        <div className='exercise-detail'>
            <div className="details-div">
                <img src={gifUrl} alt={name} />
                <div className="detail">
                    <h2>{name}</h2>
                    <p>{instructions}</p>
                    {extras.map((extra) => (
                        <div className="extras" key={extra.name}>
                            <img src={extra.icon} alt={bodyPart} />
                            <p>{extra.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="video-div">
                <div className="video-name">
                    <h2>Watch {idDetails.name} in Videos</h2>
                    <div className="videos">
                        {videoDetails?.slice(0, 6).map((video, index) => (
                            <div className='img'>
                                <a href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
                                    key={index}
                                >
                                    <img src={video.video.thumbnails[0].url} alt={video.video.title} />
                                </a>
                                <p>{video.video.title}</p>
                                <h3>{video.video.channelName}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="similar-exercises">
                <h2>Similar Muscle Exercises</h2>
                <ScrollBar data={targetExercise} targetExercise={targetExercise}
                    setTargetExercise={setTargetExercise} />
            </div>
            <div className="similar-exercises">
                <h2>Similar Equipment Exercise</h2>
                <ScrollBar data={equipmentExercise} equipmentExercise={equipmentExercise}
                    setEquipmentExercise={setEquipmentExercise} />
            </div>
        </div>
    )
}

export default ExerciseDetail