import React from "react"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogs = [
    { id: 1, name: 'Aragorn' },
    { id: 2, name: 'Gendalf' },
    { id: 3, name: 'Gimli' },
    { id: 4, name: 'Sauron' },
    { id: 5, name: 'Boromir' },
    { id: 6, name: 'Arven' },
  ]
  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your magic?' },
    { id: 3, message: 'Khazad Dum!!!' },
    { id: 4, message: 'Where is my Ring!' },
    { id: 5, message: 'Somebody help!' },
    { id: 6, message: 'I hate my dad!' },
  ]

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  // [
  //   <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
  //   <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
  //   <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
  //   <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
  //   <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
  //   <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
  // ];

  let messagesElements = messages.map(m => <Message message={m.message} />)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>

        {dialogsElements}

        {/* <DialogItem name= {dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} /> */}
      </div>
      <div className={classes.messages}>
        {messagesElements}
        {/* <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
        <Message message={messagesData[5].message} /> */}
      </div>
    </div>
  )
}

export default Dialogs;