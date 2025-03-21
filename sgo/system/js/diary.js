document.addEventListener('DOMContentLoaded', () => {
    const lessonItems = document.querySelectorAll('.lesson-item');
    const cards = document.querySelectorAll('.lesson-card');

    const elements = [
        {
            name: "Понедельник",
            lessons: [
                {
                    name: 'Алгебра',
                    start: Date.UTC(2025, 2, 20, 8, 0),
                    end: Date.UTC(2025, 2, 20, 8, 40),
                    homework: {}
                },
                {
                    name: 'Литература',
                    start: Date.UTC(2025, 2, 20, 8, 50),
                    end: Date.UTC(2025, 2, 20, 9, 30),
                    homework: null
                },
                {
                    name: 'Русский язык',
                    start: Date.UTC(2025, 2, 20, 9, 40),
                    end: Date.UTC(2025, 2, 20, 10, 20),
                    homework: null
                },
                {
                    name: 'Литература',
                    start: Date.UTC(2025, 2, 20, 10, 40),
                    end: Date.UTC(2025, 2, 20, 11, 20),
                    homework: {}
                },
                {
                    name: 'Физика',
                    start: Date.UTC(2025, 2, 20, 11, 40),
                    end: Date.UTC(2025, 2, 20, 12, 20),
                    homework: {}
                },
                {
                    name: 'Физическая культура',
                    start: Date.UTC(2025, 2, 20, 12, 30),
                    end: Date.UTC(2025, 2, 20, 13, 10),
                    homework: null
                },
                {
                    name: 'Проектная деятельность',
                    start: Date.UTC(2025, 2, 20, 13, 20),
                    end: Date.UTC(2025, 2, 20, 14, 0),
                    homework: null
                }
            ]
        },
        {
            name: "Вторник",
            lessons: [
                {
                    name: 'Алгебра',
                    start: Date.UTC(2025, 2, 21, 8, 0),
                    end: Date.UTC(2025, 2, 21, 8, 40),
                    homework: null
                },
                {
                    name: 'Литература',
                    start: Date.UTC(2025, 2, 21, 8, 50),
                    end: Date.UTC(2025, 2, 21, 9, 30),
                    homework: null
                },
                {
                    name: 'Русский язык',
                    start: Date.UTC(2025, 2, 21, 9, 40),
                    end: Date.UTC(2025, 2, 21, 10, 20),
                    homework: null
                },
                {
                    name: 'Литература',
                    start: Date.UTC(2025, 2, 21, 10, 40),
                    end: Date.UTC(2025, 2, 21, 11, 20),
                    homework: null
                },
                {
                    name: 'Физика',
                    start: Date.UTC(2025, 2, 21, 11, 40),
                    end: Date.UTC(2025, 2, 21, 12, 21),
                    homework: null
                },
                {
                    name: 'Физическая культура',
                    start: Date.UTC(2025, 2, 21, 12, 30),
                    end: Date.UTC(2025, 2, 21, 13, 10),
                    homework: null
                },
                {
                    name: 'Проектная деятельность',
                    start: Date.UTC(2025, 2, 21, 13, 20),
                    end: Date.UTC(2025, 2, 21, 14, 0),
                    homework: null
                }
            ]
        },
        {
            name: "Среда",
            lessons: [
                {
                    name: 'Алгебра',
                    start: Date.UTC(2025, 2, 22, 8, 0),
                    end: Date.UTC(2025, 2, 22, 8, 40),
                    homework: null
                },
                {
                    name: 'Литература',
                    start: Date.UTC(2025, 2, 22, 8, 50),
                    end: Date.UTC(2025, 2, 22, 9, 30),
                    homework: null
                },
                {
                    name: 'Русский язык',
                    start: Date.UTC(2025, 2, 22, 9, 40),
                    end: Date.UTC(2025, 2, 22, 10, 20),
                    homework: null
                },
                {
                    name: 'Литература',
                    start: Date.UTC(2025, 2, 22, 10, 40),
                    end: Date.UTC(2025, 2, 22, 11, 20),
                    homework: null
                },
                {
                    name: 'Физика',
                    start: Date.UTC(2025, 2, 22, 11, 40),
                    end: Date.UTC(2025, 2, 22, 12, 22),
                    homework: null
                },
                {
                    name: 'Физическая культура',
                    start: Date.UTC(2025, 2, 22, 12, 30),
                    end: Date.UTC(2025, 2, 22, 13, 10),
                    homework: null
                },
                {
                    name: 'Проектная деятельность',
                    start: Date.UTC(2025, 2, 22, 13, 20),
                    end: Date.UTC(2025, 2, 22, 14, 0),
                    homework: null
                }
            ]
        },
        {
            name: "Четверг",
            lessons: [
                {
                    name: 'Алгебра',
                    start: Date.UTC(2025, 2, 23, 8, 0),
                    end: Date.UTC(2025, 2, 23, 8, 40),
                    homework: null
                },
                {
                    name: 'Литература',
                    start: Date.UTC(2025, 2, 23, 8, 50),
                    end: Date.UTC(2025, 2, 23, 9, 30),
                    homework: null
                },
                {
                    name: 'Русский язык',
                    start: Date.UTC(2025, 2, 23, 9, 40),
                    end: Date.UTC(2025, 2, 23, 10, 20),
                    homework: null
                },
                {
                    name: 'Литература',
                    start: Date.UTC(2025, 2, 23, 10, 40),
                    end: Date.UTC(2025, 2, 23, 11, 20),
                    homework: null
                },
                {
                    name: 'Физика',
                    start: Date.UTC(2025, 2, 23, 11, 40),
                    end: Date.UTC(2025, 2, 23, 12, 23),
                    homework: null
                },
                {
                    name: 'Физическая культура',
                    start: Date.UTC(2025, 2, 23, 12, 30),
                    end: Date.UTC(2025, 2, 23, 13, 10),
                    homework: null
                },
                {
                    name: 'Проектная деятельность',
                    start: Date.UTC(2025, 2, 23, 13, 20),
                    end: Date.UTC(2025, 2, 23, 14, 0),
                    homework: null
                }
            ]
        },
        {
            name: "Пятница",
            lessons: [
                {
                    name: 'Алгебра',
                    start: Date.UTC(2025, 2, 24, 8, 0),
                    end: Date.UTC(2025, 2, 24, 8, 40),
                    homework: null
                },
                {
                    name: 'Литература',
                    start: Date.UTC(2025, 2, 24, 8, 50),
                    end: Date.UTC(2025, 2, 24, 9, 30),
                    homework: null
                },
                {
                    name: 'Русский язык',
                    start: Date.UTC(2025, 2, 24, 9, 40),
                    end: Date.UTC(2025, 2, 24, 10, 20),
                    homework: null
                },
                {
                    name: 'Литература',
                    start: Date.UTC(2025, 2, 24, 10, 40),
                    end: Date.UTC(2025, 2, 24, 11, 20),
                    homework: null
                },
                {
                    name: 'Физика',
                    start: Date.UTC(2025, 2, 24, 11, 40),
                    end: Date.UTC(2025, 2, 24, 12, 24),
                    homework: null
                },
                {
                    name: 'Физическая культура',
                    start: Date.UTC(2025, 2, 24, 12, 30),
                    end: Date.UTC(2025, 2, 24, 13, 10),
                    homework: null
                },
                {
                    name: 'Проектная деятельность',
                    start: Date.UTC(2025, 2, 24, 13, 20),
                    end: Date.UTC(2025, 2, 24, 14, 0),
                    homework: null
                }
            ]
        },
        {
            name: "Суббота",
            lessons: [
                {
                    name: 'Алгебра',
                    start: Date.UTC(2025, 2, 25, 8, 0),
                    end: Date.UTC(2025, 2, 25, 8, 40),
                    homework: null
                },
                {
                    name: 'Литература',
                    start: Date.UTC(2025, 2, 25, 8, 50),
                    end: Date.UTC(2025, 2, 25, 9, 30),
                    homework: null
                },
                {
                    name: 'Русский язык',
                    start: Date.UTC(2025, 2, 25, 9, 40),
                    end: Date.UTC(2025, 2, 25, 10, 20),
                    homework: null
                },
                {
                    name: 'Литература',
                    start: Date.UTC(2025, 2, 25, 10, 40),
                    end: Date.UTC(2025, 2, 25, 11, 20),
                    homework: null
                },
                {
                    name: 'Физика',
                    start: Date.UTC(2025, 2, 25, 11, 40),
                    end: Date.UTC(2025, 2, 25, 12, 25),
                    homework: null
                },
                {
                    name: 'Физическая культура',
                    start: Date.UTC(2025, 2, 25, 12, 30),
                    end: Date.UTC(2025, 2, 25, 13, 10),
                    homework: null
                },
                {
                    name: 'Проектная деятельность',
                    start: Date.UTC(2025, 2, 25, 13, 20),
                    end: Date.UTC(2025, 2, 25, 14, 0),
                    homework: null
                }
            ]
        }
    ]

    function leadingZero(token) {
        return ("0" + token).slice(-2)
    }

    function getLessonStatus(lesson) {
        const now = Date.now();
        const start = lesson.start - 3 * 60 * 60 * 1000;
        const end = lesson.end - 3 * 60 * 60 * 1000;

        if (now >= start && now <= end) {
            const remaining = end - now;
            return remaining < 90 * 1000
                ? {msg: 'Урок почти закончился.', clazz: 'continue'}
                : {msg: 'Урок идёт.', clazz: 'continue'};
        } else if (now < start) {
            const untilStart = start - now;
            return untilStart <= 20 * 60 * 1000
                ? {msg: `Урок начнётся через ${Math.round(untilStart / 60000)} минут.`, clazz: 'start_soon'}
                : {msg: 'Урок ещё не начался.', clazz: null};
        }
        return {msg: 'Урок окончен.', clazz: 'finish'};
    }

    for (let i = 0; i < elements.length; i++) {
        const lesson = elements[i]
        const item = cards[i];

        item.querySelector('.h2').textContent = lesson.name;
        let j = 0;
        for (let lessonItem of item.querySelector('.lesson-list').children) {
            if (!lesson.lessons[j]) break
            lessonItem.querySelector('.lesson-item__number').textContent = (j + 1).toString()
            const title = lessonItem.querySelector('.lesson-item__title')
            title.innerText = lesson.lessons[j].name
            const status = document.createElement('div')
            const stat = getLessonStatus(lesson.lessons[j])
            status.textContent = stat.msg
            status.classList.add('lesson-status')
            if (stat.clazz) status.classList.add(stat.clazz)
            title.appendChild(status)
            if (!lesson.lessons[j].homework) {
                lessonItem.querySelector('.lesson-item__note').style.opacity = '0'
            }
            const time = lessonItem.querySelector('.lesson-item__time')

            const start = new Date(lesson.lessons[j].start)
            const end = new Date(lesson.lessons[j].end)

            time.querySelector('.start').textContent = `${leadingZero(start.getUTCHours())}:${leadingZero(start.getUTCMinutes())}`
            time.querySelector('.end').textContent = `${leadingZero(end.getUTCHours())}:${leadingZero(end.getUTCMinutes())}`

            const hovers = lessonItem.querySelectorAll('.lesson-hover__item')
            hovers[0].textContent = lesson.lessons[j].name
            hovers[1].textContent = 'Учитель'
            hovers[2].textContent = 'Кабинет'
            hovers[3].textContent = `${leadingZero(start.getUTCHours())}:${leadingZero(start.getUTCMinutes())} - ${leadingZero(end.getUTCHours())}:${leadingZero(end.getUTCMinutes())}`
            j++
        }
    }

    lessonItems.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active')
        });
    })
})