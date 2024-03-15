import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { slider } from '../../helpers/slider/slider';
import icons from '../../img/sprite.svg';
import CustomExercisesItem from '../ExercisesItem/ExercisesItem';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { Loader } from '../Loader/Loader.jsx';

import {
  BackButton,
  CategoryExercisesStyle,
  CategoryLists,
  ExerciseCards,
  ExerciseCardsItem,
  ExercisesPictures,
  ExercisesSkroll,
  NavTitle,
  PageTitle,
  SvgBack,
} from './ExercisesCategories.styled';

const CATEGORIES = {
  'Body parts': 'bodyPart',
  Equipment: 'equipment',
  Muscles: 'target',
};

const ExercisesCategories = () => {
  const [exercises, setExercises] = useState([]);
  const [exercisesList, setExercisesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [pageTitle, setPageTitle] = useState('Exercises');
  const [active, setActive] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  const isCategorySelected = selectedCategory !== null;

  const fetchExercises = async (category) => {
    setSelectedCategory(null);
    setLoading(true);
    try {
      const response = await axios.get(`/exercises?filter=${category}`);
      setExercises(response.data[category]);
      setPageTitle('Exercises');
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchExerciseList = async (key, value) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/exercises/params?key=${key}&value=${value}&pageNumber=${currentPage}`
      );

      setTotalPage(response.data.totalPages);
      setExercisesList(response.data.exercises);
      setPageTitle(value);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises('bodyPart');
  }, []);

  // !-------------------------------------------------------------------------------

  useEffect(() => {
    const fetchExerciseList = async (key, value) => {
      try {
        const response = await axios.get(
          `/exercises/params?key=${key}&value=${value}&pageNumber=${currentPage}`
        );

        const newExercises = response.data.exercises;

        if (currentPage === 1) {
          setExercisesList(newExercises);
        } else {
          setExercisesList((prevState) => {
            return [...prevState, ...newExercises];
          });
        }

        setTotalPage(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedCategory) {
      fetchExerciseList(CATEGORIES[selectedCategory[0]], selectedCategory[1]);
    }
  }, [currentPage, selectedCategory]);

  useEffect(() => {
    const list = document.querySelector('.exercise-list');
    const handleScroll = () => {
      if (
        currentPage < totalPage &&
        list.scrollTop + list.clientHeight >= list.scrollHeight
      ) {
        setCurrentPage((prevState) => prevState + 1);
      }
    };

    if (list) {
      list.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (list) {
        list.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isCategorySelected, currentPage, totalPage]);

  return (
    <div>
      <NavTitle>
        <PageTitle>{pageTitle}</PageTitle>
        <CategoryLists>
          <li>
            <CategoryExercisesStyle
              $active={active === 1}
              onClick={() => {
                setActive(1);
                fetchExercises('bodyPart');
              }}
            >
              Body parts
            </CategoryExercisesStyle>
          </li>
          <li>
            <CategoryExercisesStyle
              $active={active === 2}
              onClick={() => {
                setActive(2);
                fetchExercises('equipment');
              }}
            >
              Equipment
            </CategoryExercisesStyle>
          </li>
          <li>
            <CategoryExercisesStyle
              $active={active === 3}
              onClick={() => {
                setActive(3);
                fetchExercises('target');
              }}
            >
              Muscles
            </CategoryExercisesStyle>
          </li>
        </CategoryLists>
      </NavTitle>

      {/*   // !------------------------------------------------ */}
      {isCategorySelected ? (
        <div>
          <ExercisesPictures>
            <BackButton
              type="button"
              onClick={() => {
                document.title = 'React App';
                setSelectedCategory(null);
                setPageTitle('Exercises');
              }}
            >
              <SvgBack width="16" height="16">
                <use href={icons + '#icon-next'} />
              </SvgBack>
              BACK
            </BackButton>
            <ExercisesSkroll
              className="exercise-list"
              style={{ height: '500px' }}
            >
              <ExerciseCards>
                {exercisesList.length > 0
                  ? exercisesList.map((exercise) => (
                      <CustomExercisesItem
                        key={exercise._id}
                        subcategory={exercise}
                      />
                    ))
                  : 'Empty'}
              </ExerciseCards>
            </ExercisesSkroll>
          </ExercisesPictures>
        </div>
      ) : (
        <div>
          {loading && <Loader loading={loading} />}
          {!loading && exercises.length > 0 && (
            <Slider {...slider}>
              {exercises.map((exercise) => (
                <ExerciseCardsItem key={exercise._id}>
                  <ExercisesSubcategoriesItem
                    subcategory={exercise}
                    onSelect={async (key, value) => {
                      document.title = key;
                      await fetchExerciseList(CATEGORIES[key], value);
                      setSelectedCategory([key, value]);
                    }}
                  />
                </ExerciseCardsItem>
              ))}
            </Slider>
          )}
        </div>
      )}
    </div>
  );
};

export default ExercisesCategories;
