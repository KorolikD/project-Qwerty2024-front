import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors.js';
import SvgCustom from '../SvgCustom';
import theme from '../../styles/theme.js';
import {
  DiaryItemInfo,
  DiaryTableItem,
  DiaryTableList,
  GroupTableItemWrap,
} from './DiaryMobileTable.styled.js';

const DiaryMobileTable = ({
  list,
  forExercisesTable,
  forProductsTable,
  onDelete,
}) => {
  const { blood } = useSelector(selectUser);

  return (
    <>
      {forExercisesTable && (
        <DiaryTableList>
          {list.map((exercise) => (
            <DiaryTableItem key={exercise._id}>
              <div>
                Body Part{' '}
                <DiaryItemInfo>{exercise.exerciseId.bodyPart}</DiaryItemInfo>
              </div>
              <div>
                Equipment{' '}
                <DiaryItemInfo>{exercise.exerciseId.equipment}</DiaryItemInfo>
              </div>
              <div>
                Name <DiaryItemInfo>{exercise.exerciseId.name}</DiaryItemInfo>
              </div>
              <GroupTableItemWrap>
                <div>
                  Target{' '}
                  <DiaryItemInfo>{exercise.exerciseId.target}</DiaryItemInfo>
                </div>
                <div>
                  BurnedCalories{' '}
                  <DiaryItemInfo>{exercise.burnedCalories}</DiaryItemInfo>
                </div>
                <div>
                  Time <DiaryItemInfo>{exercise.time}</DiaryItemInfo>
                </div>
                <button
                  onClick={() => {
                    onDelete({ id: exercise._id });
                  }}
                >
                  <SvgCustom
                    icon="icon-trash"
                    size="20"
                    stroke={theme.colors.secondary}
                  />
                </button>
              </GroupTableItemWrap>
            </DiaryTableItem>
          ))}
        </DiaryTableList>
      )}

      {forProductsTable && (
        <DiaryTableList>
          {list.map((product) => (
            <DiaryTableItem key={product._id}>
              <div>
                Title <DiaryItemInfo>{product.productId.title}</DiaryItemInfo>
              </div>
              <div>
                Category{' '}
                <DiaryItemInfo>{product.productId.category}</DiaryItemInfo>
              </div>
              <GroupTableItemWrap>
                <div>
                  Calories <DiaryItemInfo>{product.calories}</DiaryItemInfo>
                </div>
                <div>
                  Weight <DiaryItemInfo>{product.weight}</DiaryItemInfo>
                </div>
                <div>
                  Recommend{' '}
                  <DiaryItemInfo
                    $recommend
                    $color={product.productId.groupBloodNotAllowed[blood]}
                  >
                    {product.productId.groupBloodNotAllowed[blood]
                      ? 'Yes'
                      : 'No'}
                  </DiaryItemInfo>
                </div>
                <button
                  onClick={() => {
                    onDelete({ id: product._id });
                  }}
                >
                  <SvgCustom
                    icon="icon-trash"
                    size="20"
                    stroke={theme.colors.secondary}
                  />
                </button>
              </GroupTableItemWrap>
            </DiaryTableItem>
          ))}
        </DiaryTableList>
      )}
    </>
  );
};

export default DiaryMobileTable;
