import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";


const useFirestoreData = (lang='vi') => {
  const [tasks, setTasks] = useState([]);
  const [subjects, setSubjects] = useState([]);
  
  useEffect(() => {
		/* 
		fields of tasks:
		- deadline
		- contents
		- contentsText
		- subjectName
		- subjectShortName
		- subjectColor
		- books: [{name, grade, link}]
		*/
		const qt = query(collection(db, "Tasks"));
		const unsubscribeTasks = onSnapshot(qt, (snapshot) => {
			const tasksData = snapshot.docs.map(doc => {
				const data = doc.data();

				let contentsText = "";
				for (let i = 0; i < data.contents.length; i++) {
					if (data.contents[i].type == "text") {
						const text = data.contents[i].content['text-'+lang];
						contentsText += contentsText === "" ? text : ", " + text;
					}
				}

				const task = {
						id: doc.id,
						deadline: data.deadline.toDate(),
						contents: data.contents,
						contentsText: contentsText,
						subjectColor: data.subject.color,
						subjectName: data.subject['name-' + lang],
						subjectShortName: data.subject['short-name-' + lang],
						books: data.subject.books
				};
			return task;});
			setTasks(tasksData);
		});
		
		/* 
		fields of subjects:
		- name
		- shortName
		- color
		- books: [{name, grade, link}]
		*/
		const qs = query(collection(db, "Subjects"));
		const unsubscribeSubjects = onSnapshot(qs, (snapshot) => {
			const subjectsData = snapshot.docs.map(doc => {
				const data = doc.data();

				let books = [];

				for (let i = 0; i < data.books.length; i++) {
					books.push({
						name: data.books[i]['name-' + lang],
						link: data.books[i].link,
						grade: data.books[i].grade
					});
				}
				books.sort((a, b) => {
					const nameA = a.name.toUpperCase();
					const nameB = b.name.toUpperCase();

					if (nameA < nameB) {
						return -1;
					}
					if (nameA > nameB) {
						return 1;
					}
					return 0;
				});

				const subjects = {
					id: doc.id,
					name: data['name-' + lang],
					shortName: data['short-name-' + lang],
					color: data.color,
					books: books
				}

				return subjects;
			});
		setSubjects(subjectsData);
	});
	return () => {
			unsubscribeTasks();
			unsubscribeSubjects();
	}
}, []);

  return { tasks, subjects }
}

export default useFirestoreData