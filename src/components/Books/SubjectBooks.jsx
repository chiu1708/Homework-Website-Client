import { a, i } from 'motion/react-client'
import React from 'react'

const SubjectBooks = (subject) => {
  console.log(subject)

  return (
    <div className="box d-flex justify-content-between">
        <b className={"name " + subject.color}>{subject.name}</b>
        <div className="books d-flex gap-4">
          {
            subject.books.map((book) => {
              return (
                <a key={book.name} href={book.link}><u>{book.name}</u></a>
              )
            })
          }
        </div>
    </div>
  )
}

export default SubjectBooks