import { connectDB } from './lib/db';
import { StudentModel } from './lib/models/student.model';
import { AdminModel } from './lib/models/admin.model';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '.env.local' });

async function check() {
    try {
        await connectDB();
        const admins = await AdminModel.find({ name: /Rupak/i });
        const students = await StudentModel.find({ name: /Rupak/i });

        console.log('Admins found:', admins.length);
        admins.forEach(a => console.log(`Admin ${a.name}: ${a.image}`));

        console.log('Students found:', students.length);
        students.forEach(s => console.log(`Student ${s.name}: ${s.image}`));
    } catch (e) {
        console.error(e);
    }
    process.exit(0);
}

check();
