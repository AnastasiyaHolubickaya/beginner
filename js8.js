const finalGrade = (exam_grade, completed_projects) => {
    let final_grade;
        (exam_grade > 90 && exam_grade <= 100 || completed_projects >10)
            ? final_grade = 100
            : (exam_grade > 75 && exam_grade <=90 || completed_projects >=5)
            ? final_grade=90
            : (exam_grade > 50 && exam_grade <=75 || completed_projects >=2)
                ? final_grade=75 : final_grade =0;

    return final_grade;
};
console.log( finalGrade(55, 3));