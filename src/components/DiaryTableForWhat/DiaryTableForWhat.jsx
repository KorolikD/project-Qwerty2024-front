import { useDispatch } from 'react-redux';
import MediaQuery from 'react-responsive';
import { deleteExercise, deleteProduct } from '../../redux/diary/operations.js';
import SvgCustom from '../SvgCustom';
import DiaryMobileTable from '../DiaryMobileTable';
import DiaryTableFromTablet from '../DiaryTableFromTablet';
import theme from '../../styles/theme.js';
import {
  DiaryNotFoundText,
  DiaryTableHeader,
  DiaryTablesWrap,
  Link,
} from './DiaryTableForWhat.styled';

const DiaryTableForWhat = ({
  list,
  date,
  to,
  forExercisesTable,
  forProductsTable,
}) => {
  const dispatch = useDispatch();

  const onDiaryDelete = (id) => {
    forExercisesTable
      ? dispatch(deleteExercise({ id, date }))
      : dispatch(deleteProduct({ id, date }));
  };
  return (
    <DiaryTablesWrap list={list}>
      <DiaryTableHeader>
        <p>{forExercisesTable ? 'Exercises' : 'Products'}</p>
        <Link to={to}>
          Add {forExercisesTable ? 'exercise' : 'product'}
          <SvgCustom icon="icon-next" size="16" color={theme.colors.primary} />
        </Link>
      </DiaryTableHeader>

      {list ? (
        <>
          <MediaQuery minWidth={768}>
            <DiaryTableFromTablet
              list={list}
              date={date}
              forExercisesTable={forExercisesTable}
              forProductsTable={forProductsTable}
              onDelete={onDiaryDelete}
            />
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <DiaryMobileTable
              list={list}
              date={date}
              forExercisesTable={forExercisesTable}
              forProductsTable={forProductsTable}
              onDelete={onDiaryDelete}
            />
          </MediaQuery>
        </>
      ) : (
        <DiaryNotFoundText>
          Not found {forExercisesTable ? 'exercises' : 'products'}
        </DiaryNotFoundText>
      )}
    </DiaryTablesWrap>
  );
};

export default DiaryTableForWhat;
