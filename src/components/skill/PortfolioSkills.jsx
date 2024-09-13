import React from "react";
import { skills } from "./skills";
import "./portfolioskills.scss";

const PortfolioSkills = () => {
	const skills = [
		{ name: "JavaScript", url: "https://www.javascript.com", icon: "/icons/javascript.svg" },
		{ name: "TypeScript", url: "https://www.typescriptlang.org", icon: "/icons/typescript.svg" },
		{ name: "Dart", url: "https://dart.dev", icon: "/icons/flutter.svg" },
		{ name: "Python", url: "https://www.python.org", icon: "/icons/python-5.svg" },
		{ name: "C", url: "https://en.cppreference.com/w/c", icon: "/icons/mongodb-icon-1.svg" },
		{ name: "C++", url: "https://isocpp.org", icon: "/icons/mocha-1.svg" },
		{ name: "PHP", url: "https://www.php.net", icon: "/icons/Tux.svg" },
		{
			name: "HTML",
			url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			icon: "/icons/html-1.svg",
		},
		{
			name: "CSS",
			url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
			icon: "/icons/css-3.svg",
		},
		{ name: "MySQL", url: "https://www.mysql.com", icon: "/icons/mysql-icon.svg" },
		{ name: "React", url: "https://reactjs.org", icon: "/icons/react-2.svg" },
		{ name: "Flutter", url: "https://flutter.dev", icon: "/icons/flutter2.svg" },
		{ name: "React Native", url: "https://reactnative.dev", icon: "/icons/react-2.svg" },
		{
			name: "WordPress",
			url: "https://wordpress.org",
			icon: "/icons/tailwind-css-seeklogo.com.svg",
		},
		{ name: "PostgreSQL", url: "https://www.postgresql.org", icon: "/icons/postgresql-icon.svg" },
		{
			name: "MS SQL",
			url: "https://www.microsoft.com/sql-server",
			icon: "/icons/mysql-official.svg",
		},
		{ name: "GraphQL", url: "https://graphql.org", icon: "/icons/graphql.svg" },
		{ name: "Redis", url: "https://redis.io", icon: "/icons/redux.svg" },
		{ name: "Prisma", url: "https://www.prisma.io", icon: "/icons/prisma.svg" },
		{ name: "Node.js", url: "https://nodejs.org", icon: "/icons/nodejs-icon.svg" },
		{ name: "Next.js", url: "https://nextjs.org", icon: "/icons/next-js.svg" },
		{ name: "Express", url: "https://expressjs.com", icon: "/icons/expressjs.svg" },
		{ name: "FastAPI", url: "https://fastapi.tiangolo.com", icon: "/icons/python-5.svg" },
		{ name: "Git", url: "https://git-scm.com", icon: "/icons/git-icon.svg" },
		{ name: "GitHub", url: "https://github.com", icon: "/icons/git-icon.svg" },
		{ name: "Docker", url: "https://www.docker.com", icon: "/icons/docker-icon.svg" },
		{ name: "AWS", url: "https://aws.amazon.com", icon: "/icons/sass-1.svg" },
	];

	return (
		<div className='page' id='page3'>
			<div className='right-half'>
				<div className='container'>
					{skills.map((skill) => (
						<a key={skill.name} href={skill.url} target='_blank' rel='noreferrer'>
							<div className='skill' data-content={skill.name}>
								<img src={skill.icon} alt={skill.name} title={skill.name} />
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default PortfolioSkills;
