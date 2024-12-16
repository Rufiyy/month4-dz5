import React, { useState } from 'react';

function NameList() {
    const [name, setName] = useState(''); // для хранения введенного имени
    const [nameList, setNameList] = useState([]); // для хранения списка имен

    // Функция для добавления имени в список
    const addName = () => {
        if (name.trim() !== '') {
            setNameList([...nameList, name]);
            setName(''); // очистить поле ввода
        }
    };

    // Функция для изменения имени в списке
    const changeName = (index) => {
        if (name.trim() !== '') {
            const updatedList = [...nameList];
            updatedList[index] = name;
            setNameList(updatedList);
            setName(''); // очистить поле ввода
        }
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя"
            />
            <button onClick={addName} disabled={name.trim() === ''}>
                Добавить
            </button>

            <div>
                {nameList.length === 0 ? (
                    <p>Список пуст</p>
                ) : (
                    <ul>
                        {nameList.map((nameItem, index) => (
                            <li key={index}>
                                {nameItem}
                                <button
                                    onClick={() => changeName(index)}
                                    disabled={name.trim() === ''}
                                >
                                    Поменять
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default NameList;
