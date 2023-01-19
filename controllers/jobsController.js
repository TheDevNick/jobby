const createJob = async (req, res) => {
    return res.send('Create Job')
}
const deleteJob = async (req, res) => {
    return res.send('Delete Job')
}
const getAllJobs = async (req, res) => {
    return res.send('Get all jobs')
}
const updateJob = async (req, res) => {
    return res.send('Update Job')
}
const showStats = async (req, res) => {
    return res.send('Show stats')
}


export {createJob, deleteJob, getAllJobs, updateJob, showStats}