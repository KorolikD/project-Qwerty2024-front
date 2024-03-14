import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors.js';
import {
  selectUpdateDiaryExercise,
  selectUpdateDiaryProduct,
} from '../../redux/diary/selectors.js';
import { Loader } from '../Loader/Loader.jsx';
import SvgCustom from '../SvgCustom/SvgCustom.jsx';
import theme from '../../styles/theme.js';
import {
  DiaryBtn,
  DiaryTable,
  TableCell,
  TableProductsHead,
  TableProductsBody,
  TableExersicesHead,
  TableExercisesBody,
} from './DiaryTableFromTablet.styled.js';

const DiaryTableFromTablet = ({
  list,
  forExercisesTable,
  forProductsTable,
  onDelete,
}) => {
  const { blood } = useSelector(selectUser);
  const updateDiaryProduct = useSelector(selectUpdateDiaryProduct);
  const updateDiaryExercise = useSelector(selectUpdateDiaryExercise);

  return (
    <>
      {updateDiaryExercise ? (
        <Loader />
      ) : (
        <>
          {forExercisesTable && (
            <DiaryTable>
              <TableExersicesHead>
                <tr>
                  <th>Body Part</th>
                  <th>Equipment</th>
                  <th>Name</th>
                  <th>Target</th>
                  <th>Burned Calories</th>
                  <th>Time</th>
                  <th></th>
                </tr>
              </TableExersicesHead>

              <TableExercisesBody>
                {list.map((exercise) => (
                  <tr key={exercise._id}>
                    <TableCell>{exercise.exerciseId.bodyPart}</TableCell>
                    <TableCell>{exercise.exerciseId.equipment}</TableCell>
                    <TableCell>{exercise.exerciseId.name}</TableCell>
                    <TableCell>{exercise.exerciseId.target}</TableCell>
                    <TableCell>{Math.round(exercise.burnedCalories)}</TableCell>
                    <TableCell>{exercise.time.toFixed(2)}</TableCell>
                    <td>
                      <DiaryBtn
                        onClick={() => {
                          onDelete({ id: exercise._id });
                        }}
                      >
                        <SvgCustom
                          icon="icon-trash"
                          size="20"
                          stroke={theme.colors.secondary}
                        />
                      </DiaryBtn>
                    </td>
                  </tr>
                ))}
              </TableExercisesBody>
            </DiaryTable>
          )}
        </>
      )}

      {updateDiaryProduct ? (
        <Loader />
      ) : (
        <>
          {forProductsTable && (
            <DiaryTable>
              <TableProductsHead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Calories</th>
                  <th>Weight</th>
                  <th>Recommend</th>
                  <th></th>
                </tr>
              </TableProductsHead>

              <TableProductsBody>
                {list.map((product) => (
                  <tr key={product._id}>
                    <TableCell>{product.productId.title}</TableCell>
                    <TableCell>{product.productId.category}</TableCell>
                    <TableCell>{Math.round(product.calories)}</TableCell>
                    <TableCell>{Math.round(product.weight)}</TableCell>
                    <TableCell
                      $recommend
                      $color={product.productId.groupBloodNotAllowed[blood]}
                    >
                      {product.productId.groupBloodNotAllowed[blood]
                        ? 'Yes'
                        : 'No'}
                    </TableCell>
                    <td>
                      <DiaryBtn
                        onClick={() => {
                          onDelete({ id: product._id });
                        }}
                      >
                        <SvgCustom
                          icon="icon-trash"
                          size="20"
                          stroke={theme.colors.secondary}
                        />
                      </DiaryBtn>
                    </td>
                  </tr>
                ))}
              </TableProductsBody>
            </DiaryTable>
          )}
        </>
      )}
    </>
  );
};

export default DiaryTableFromTablet;
