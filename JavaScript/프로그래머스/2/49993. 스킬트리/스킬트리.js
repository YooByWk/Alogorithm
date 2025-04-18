function solution(skill, skill_trees) {
    let answer = 0;

    for (const skillTree of skill_trees) {
        let extractedSkills = "";
        for (const s of skillTree) {
            if (skill.includes(s)) {
                extractedSkills += s;
            }
        }

        let isValid = true;
        for (let i = 0; i < extractedSkills.length; i++) {
            if (extractedSkills[i] !== skill[i]) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            answer++;
        }
    }

    return answer;
}